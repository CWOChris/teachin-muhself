var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;
elForm = document.getElementById('formSignup');
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

function packageHint() {
    var pack = this.options[this.selectedIndex].value;
    if (pack == 'monthly') {
        elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!';
    } else {
        elPackageHint.innerHTML = 'Wise choice!';
    }
}

function checkTerms(event) {
    if (!elTerms.checked) {
        elTermsHint.innerHTML = 'You must agree to the terms.';
        event.preventDefault();
    }
}

elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);
