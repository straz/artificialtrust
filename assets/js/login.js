---
---


// We're not kidding ourselves, this code is on github so of course anyone can read it.
// This is just a fig leaf to deflect bots and casual visitors.
const SUPER_SECRET = 'norbert';
const LOGIN_DAYS = 30;
const LOGIN_COOKIE = 'login';

$(document).ready(init_login);


function init_login(){
    $('button.preview-login').click(on_login_click);
    $('button.preview-logout').click(on_logout_click);
    let saved = get_cookie(LOGIN_COOKIE);
    if (saved != SUPER_SECRET){
	// if cookie is invalid yowza
	if ($('.preview-login').length == 0) {
	    //  if not on login page, redirect to login page
	    window.location = '{{ site.url }}/login';
	} else {
	    $('div.container.content').removeClass('d-none');
	}
    } else {
	// cookie is valid
	$('div.container.content').removeClass('d-none');
	$('input.password, button.preview-login').addClass('d-none');
	$('button.preview-logout').removeClass('d-none');
    }
}

function set_cookie(name, value, days = LOGIN_DAYS, path = '/') {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=' + path + ';SameSite=Lax';
}

function get_cookie(name) {
  return document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=')
    return parts[0] === name ? decodeURIComponent(parts[1]) : r
  }, '')
}

function delete_cookie(name, path = '/') {
  set_cookie(name, '', -1, path)
}

function on_login_click(){
    let password = $('input.password').val();
    if (password == SUPER_SECRET){
	set_cookie(LOGIN_COOKIE, password);
	window.location = '/';
    } else {
	$('.password,.preview-login').addClass('bad');
	setTimeout(()=>$('.password,.preview-login').removeClass('bad'), 500);
    }
    return false;
}

function on_logout_click(){
    delete_cookie(LOGIN_COOKIE);
    window.location = '/';
    return false;
}

