/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type SheetReader = import('./sheetreader_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends Playwright, SheetReader {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
