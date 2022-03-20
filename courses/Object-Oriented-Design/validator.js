// const hasNumber = (string) => (string.search(/\d/)) !== -1;

// const getBool = (value) => (value === null || value === false) ? false : true;

// class PasswordValidator {
//   constructor(rules = { minLength: 8, containNumbers: true }) {
//     this.minLength = rules.minLength ?? 8;
//     this.containNumbers = getBool(rules.containNumbers) ?? true;
//   }

//   static errs = {
//     minLength: { minLength: 'too small' },
//     containNumbers: { containNumbers: 'should contain at least one number' },
//     all: { minLength: 'too small', containNumbers: 'should contain at least one number' },
//   }

//   checkLength(password) {
//     if (password.length < this.minLength) {
//       return true;
//     }
//     return false;
//   }

//   checkContain(password) {
//     if (hasNumber(password) !== this.containNumbers) {
//       return true;
//     }
//     return false;
//   }

//   validate(password) {
//     if (this.checkLength(password) && this.checkContain(password)) {
//       return PasswordValidator.errs.all;
//     }
//     if (this.checkLength(password)) {
//       return PasswordValidator.errs.minLength;
//     }
//     if (this.checkContain(password)) {
//       return PasswordValidator.errs.containNumbers;
//     }
//     return {};
//   }
// }

// Bad code

// const validator = new PasswordValidator({ containNumbers: false });
// const errors1 = validator.validate('qwertyui');

// console.log(errors1);

// { minLength: 'too small', containNumber: 'should contain at least one number' }
