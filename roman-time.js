var hours = process.argv[2];
var minutes = process.argv[3];
var arab = [1, 4, 5, 9, 10, 40, 50];
var rome = ['I','IV','V','IX','X','XL', 'L'];
function arabToRome(number)
{
    var  result  = '';
    var i = arab.length - 1;
    while(number > 0)
    {
        if(number >= arab[i])
        {
             result  += rome[i];
            number -= arab[i];
        }
        else
        {
            i--;
        }
    }
    if (result === '')
    {
        result = '-';
    }
    return  result ;
}
if (((hours + 'a' + minutes).indexOf('.') < 0) && hours<24 && minutes<=60 && hours>=0 && minutes>=0)
    {
        console.log(arabToRome(hours),':',arabToRome(minutes));
    }
    else
    {
        console.log('Время указано не верно');
    }
