import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, ValidationErrors, AbstractControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { IonInput, IonSelect } from '@ionic/angular';

import { GlobalService } from "../global.service";
import { SelectServerComponent } from '../sharedcomponents/select-server/select-server.component';

/*
TODO:
- when changing password or server, alert that user needs to update password or server on other devices as well
*/

// custom validator to check that the passwords match:
export function passwords_match(control: AbstractControl): ValidationErrors | null {
  if (control) {
    const password = control.get('password');
    const confirm_password = control.get('confirm_password');
    if (password.errors) {
      return (password.errors);
    }
    if (confirm_password.value !== password.value) {
      return ({must_match: true});
    }
  }
  return null;
}

// PAGE:

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  // ATTRIBUTES:

  // template components:

  @ViewChild(IonInput) retype_password: IonInput;
  @ViewChild(SelectServerComponent) select_server: SelectServerComponent;
  @ViewChildren(IonSelect) ionSelects: QueryList<IonSelect>;

  // form:

  private formGroup: FormGroup;
  private editing_email: Boolean;
  private editing_password: Boolean;
  private showing_password: Boolean;
  private advanced_expanded: Boolean;

  // LIFECYCLE:

  private ready = false;  

  constructor(
      public formBuilder: FormBuilder,
      public translate: TranslateService,
      public G: GlobalService) { 
    this.G.L.entry("SettingsPage.constructor");
  }

  ngOnInit() {
    this.G.L.entry("SettingsPage.ngOnInit");
    this.formGroup = this.formBuilder.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      pw: this.formBuilder.group({
        password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
        ])),
        confirm_password: new FormControl('', Validators.required),
      }, {
        validators: [passwords_match]
      }),
      language: new FormControl('', Validators.required),
      theme: new FormControl('', Validators.required),
    });
  }
  
  ionViewWillEnter() {
    this.G.L.entry("SettingsPage.ionViewWillEnter");
    this.G.D.page = this.select_server.parent = this;
    this.editing_email = false;
    this.editing_password = false;
    this.showing_password = false;
    this.advanced_expanded = false;
  }

  ionViewDidEnter() {
    this.G.L.entry("SettingsPage.ionViewDidEnter");
    if (this.G.D.ready && !this.ready) this.onDataReady();
  }

  onDataReady() {
    // called when DataService initialization was slower than view initialization
    this.G.L.entry("SettingsPage.onDataReady");
    this.fill_form();
    this.ready = true;
  }

  // OTHER HOOKS:
  
  // for DataService:

  onDataChange() {
    // called whenever data stored in database has changed
    this.G.L.entry("SettingsPage.onDataChange");
    this.fill_form();
  }

  // for form actions:

  private set_email() {
    let c = this.formGroup.get('email');
    if (c.valid) this.G.S.email = c.value; // will trigger data move
  }
  private set_password() {
    let fg = this.formGroup.get('pw');
    if (fg.valid) this.G.S.password = fg.get('password').value; // will trigger data move
  }
  private set_language() {
    let c = this.formGroup.get('language');
    if (c.valid) this.G.S.language = c.value;
  }
  private set_theme() {
    let c = this.formGroup.get('theme');
    if (c.valid) this.G.S.theme = c.value;
  }

  // selectServer component hooks:

  set_db(value: string) {
    this.G.S.db = value;
  }
  set_db_from_pid(value: string) {
    this.G.S.db_from_pid = value;
  }
  set_db_url(value: string) {
    this.G.S.db_url = value;
  }
  set_db_username(value: string) {
    this.G.S.db_username = value;
  }
  set_db_password(value: string) {
    this.G.S.db_password = value;
  }

  // OTHER METHODS:

  private fill_form() {
    this.G.L.entry("SettingsPage.fill_form");
    // fill form fields with values from data or defaults
    this.formGroup.setValue({
      email: this.G.S.email||'',
      pw: {
        password: this.G.S.password||'',
        confirm_password: this.G.S.password||'',
      },
      language: this.G.S.language||navigator.languages[0].slice(0,2),
      theme: this.G.S.theme||'light',
    });
    this.select_server.selectServerFormGroup.setValue({
      db: this.G.S.db||'',
      db_from_pid: this.G.S.db_from_pid||'',
      db_url: this.G.S.db_url||'',
      db_username: this.G.S.db_username||'',
      db_password: this.G.S.db_password||'',
    });
  }

  // OTHER CONSTANTS:

  private validation_messages = {
    'email': [
      { type: 'required', message: 'validation.email-required' },
      { type: 'email', message: 'validation.email-valid' }
    ],
    'password': [
      { type: 'required', message: 'validation.password-required' },
      { type: 'minlength', message: 'validation.password-length' },
      { type: 'pattern', message: 'validation.password-pattern' }  // verify that this is really what the validator tests
    ],
    'passwords_match': [
      { message: 'validation.passwords-match' }
    ],
  }
  
}
