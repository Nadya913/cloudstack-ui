///<reference path="../node_modules/@types/jasmine/index.d.ts"/>
import { VMCreation } from './pages/vm-creation.po';
import { VMDeploy } from './pages/vm-deploy.po';
import { browser, by, element } from 'protractor';
import { VMList } from './pages/vm-list.po';
import { Login } from './pages/login.po';
import { VMSidebar } from './pages/vm-sidebar.po';

describe('e2e-test-vm-sidebar', () => {
  let deploy: VMDeploy;
  let login: Login;
  let vmlist: VMList;
  let sidebar: VMSidebar;

  beforeAll(() => {
    browser.driver
      .manage()
      .window()
      .maximize();
    login = new Login();
    login.navigateTo('/');
    login.login();
    login.waitRedirect('instances');
  });

  beforeEach(() => {
    vmlist = new VMList();
    deploy = new VMDeploy();
    sidebar = new VMSidebar();
  });

  /* it('Verify VM color is changed', () => {
    vmlist.clickOpenSidebar(0);
    sidebar.clickColorChange().then((color) => {
      sidebar.clickClose();
      vmlist.getVMColor(0).then ( (vmcolor) => {
        expect(vmcolor).toContain(color);
      });
    });
  });

  it('Verify description is changed', () => {
    vmlist.clickOpenSidebar(0);
    sidebar.setDescription("desc");
    sidebar.clickClose();
    vmlist.clickBell();
    expect(vmlist.verifyBellMessage("Description changed")).toBeTruthy();
  });

  it('Verify new group is set', () => {
    vmlist.clickOpenSidebar(0);
    sidebar.clickEditGroup();
    sidebar.setNewGroupOption(sidebar.group);
    sidebar.clickSubmitGroupButton();
    sidebar.waitGroupChanged(sidebar.group);
    sidebar.clickClose();
    vmlist.clickBell();
    expect(vmlist.verifyBellMessage('Instance group changed')).toBeTruthy();
  });

  it('Verify existing group can be set', () => {
    vmlist.clickOpenSidebar(0);
    sidebar.clickEditGroup();
    sidebar.setExistingGroupOption().then(group => {
      sidebar.clickSubmitGroupButton();
      sidebar.waitGroupChanged(group);
      expect(sidebar.getGroup()).toEqual(group);
    });
    sidebar.clickClose();
    vmlist.clickBell();
    expect(vmlist.verifyBellMessage('Instance group changed')).toBeTruthy();
  });

  it('Verify group with incorrect name can not be set', () => {
    vmlist.clickOpenSidebar(0);
    sidebar.clickEditGroup();
    sidebar.setNewGroupOption('5214351538713');
    expect(sidebar.isEnabledSubmitGroupButton()).toBeFalsy('Create button is enabled for incorrect group name');
    sidebar.clickCancelGroupButton();
    sidebar.clickClose();
  });

  it('Verify group is removed', () => {
    vmlist.clickOpenSidebar(0);
    sidebar.clickEditGroup();
    sidebar.setRemoveGroupOption();
    sidebar.clickSubmitGroupButton();
    sidebar.waitGroupChanged('Default group');
    sidebar.clickClose();
    vmlist.clickBell();
    expect(vmlist.verifyBellMessage('Instance group removed')).toBeTruthy();
  });
*/

  it('Verify new affinity group is set', () => {
    vmlist.clickOpenSidebarRunning();
    sidebar.clickAddAffGroup();
    sidebar.setNewAffGroup(sidebar.aff);
    sidebar.waitDialogModal();
    sidebar.clickYesDialogButton();
    sidebar.waitAffGroupChanged(sidebar.aff);
    sidebar.clickClose();
    vmlist.clickBell();
    expect(vmlist.verifyBellMessage('VM stopped')).toBeTruthy();
    expect(vmlist.verifyBellMessage('Affinity group changed')).toBeTruthy();
    expect(vmlist.verifyBellMessage('VM started')).toBeTruthy();
  });
});
