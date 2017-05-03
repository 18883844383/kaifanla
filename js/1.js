/**用户名输入验证**/
uname.onblur = function(){
  if(this.validity.valueMissing){
    var msg = '用户名不能为空！';
    this.nextElementSibling.innerHTML = msg;
    this.nextElementSibling.className = 'help-block err';
    this.setCustomValidity(msg);
  }else if(this.validity.tooShort){
    var msg = '用户名不能少于6位！';
    this.nextElementSibling.innerHTML = msg;
    this.nextElementSibling.className = 'help-block err';
    this.setCustomValidity(msg);
  }else if(this.validity.tooLong){
    var msg = '用户名不能大于9位！';
    this.nextElementSibling.innerHTML = msg;
    this.nextElementSibling.className = 'help-block err';
    this.setCustomValidity(msg);
  }else {

    this.nextElementSibling.className = 'help-block hide';
    this.setCustomValidity('');
  }
}
upwd.onblur = function(){
  if(this.validity.valueMissing){
    var msg = '密码不能为空！';
    this.nextElementSibling.innerHTML = msg;
    this.nextElementSibling.className = 'help-block err';
    this.setCustomValidity(msg);
  }else if(this.validity.tooShort){
    var msg = '密码不能少于6位！';
    this.nextElementSibling.innerHTML = msg;
    this.nextElementSibling.className = 'help-block err';
    this.setCustomValidity(msg);
  }else if(this.validity.tooLong){
    var msg = '密码不能大于9位！';
    this.nextElementSibling.innerHTML = msg;
    this.nextElementSibling.className = 'help-block bg-danger';
    this.setCustomValidity(msg);
  }else {
    this.nextElementSibling.className = 'hide';
    this.setCustomValidity('');
  }
}