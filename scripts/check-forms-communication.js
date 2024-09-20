$(document).ready(function() {
    $('.contact-form').submit(function(event) {
        event.preventDefault(); 
        if ($('#name').val() === '' || $('#phone').val() === '') {
            return false; 
        }

        $.ajax({
            type: "POST",
            // url: "mail/communication-client.php", 
            data: $(this).serialize()
        }).done(function() {
            $('.contact-form').find('input, textarea').val('');
            swal('Звернення прийнято!', "Я зв'яжуться з Вами найблищим часом", 'success');
        }).fail(function() {
            swal('Помилка', 'Щось пішло не так. Спробуйте ще раз.', 'error');
        });

        return false;
    });
});