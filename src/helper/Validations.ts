export class Validations {

    static isEmailValid(email: string) {
        return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
    }

    static isNameValid(name: string) {
        if (!name) {
            return false;
        }

        return /^[a-zA-Z]+$/.test(name);
    }

    static isMobileValid(mobile: string) {
        if (!mobile || mobile.startsWith('0')) {
            return false;
        }

        return /\b\d{10}\b/g.test(mobile);
    }

    static isGenderValid(gender) {
        return typeof gender === 'boolean';
    }
}