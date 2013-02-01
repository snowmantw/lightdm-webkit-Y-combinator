DEBUG = false

SHOW_LINE = 1
SHOW_LINE_MAX = 15
SHOW_TIME = 800
SHOW_WAIT_TIME = 6000

function Ycountdown()
{
   $('#ycombinators .line').eq(SHOW_LINE).fadeIn()
   SHOW_LINE += 1;
   if( SHOW_LINE > SHOW_LINE_MAX )
   {
       SHOW_LINE = 1
       setTimeout('Ycountdown_hide()', SHOW_WAIT_TIME);
   }
   else
   {
       setTimeout('Ycountdown()', SHOW_TIME);
   }
}

function Ycountdown_hide()
{
    $("#ycombinators .line").hide()
    $("#ycombinators .line").eq(0).show()
    setTimeout('Ycountdown()', SHOW_TIME);
}

// Default callbakc function
function authentication_complete()
{
    debug("authentication_complete called");
    debug("is_authenticated: " + lightdm.is_authenticated);
    debug("auth_user: " + lightdm.authentication_user);

   if (lightdm.is_authenticated)
       lightdm.login (lightdm.authentication_user, lightdm.default_session);
   else
       showMessage ("Authentication Failed");

   reset ();
}

function reset()
{
    $('#password').val("")
}

function setInput()
{
    $('#username').focus()

    $('#password').keypress(function(e){
        if(e.which == 13)
        {
            lightdm.start_authentication( $("#username").val() );
            debug("start_authentication")            
        }
    })
}

function showMessage(text)
{
    $('#message').append("<p>"+text+"</p>")
}

// Default callbakc function
function show_prompt(text) {
	debug("show_prompt called");
        debug("show_prompt text: " + text);
	submitPassword()
}

function submitPassword(){
	debug("submitPassword called");

	lightdm.provide_secret($("#password").val());
}

function debug(txt)
{
    if( DEBUG )
    {
        showMessage('[DEBUG]'+txt)
    }
}

function info(txt)
{
    showMessage(txt)
}
