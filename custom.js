$(document).ready(function() {
    
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    if($.support.placeholder) {
        $('.form-label').each(function(){
            $(this).addClass('js-hide-label');
        });  

        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
            
            var $this = $(this),
                $parent = $this.parent().find("label");
                    
                        switch(e.type) {
                            case 'keyup': {
                                 $parent.toggleClass('js-hide-label', $this.val() == '');
                            } break;
                            case 'blur': {
                                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label');
                } else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
                            } break;
                            case 'focus': {
                                if( $this.val() !== '' ) {
                    $parent.removeClass('js-unhighlight-label');
                }
                            } break;
                            default: break;
                        }
        });
    } 
});

function viewSource(){;
    var source = "<html>";
    source += document.getElementsByTagName('html')[0].innerHTML;
    source += "</html>";
    source = source.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    source = "<pre>"+source+"</pre>";
    sourceWindow = window.open('', '_blank','Source of page','height=800,width=800,scrollbars=1,resizable=1');
    sourceWindow.document.write(source);
    sourceWindow.document.close(); 
    if(window.focus) sourceWindow.focus();
    }  