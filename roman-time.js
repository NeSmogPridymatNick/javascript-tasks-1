var hours = process.argv[2];
var minutes = process.argv[3];
var a = [1, 4, 5, 9, 10, 40, 50];
var r = ['I','IV','V','IX','X','XL', 'L'];
function aToR(number)
{
    var ret = '';
    var i = a.length - 1;
    while(number > 0)
    {
        if(number >= a[i])
        {
            ret += r[i];
            number -= a[i];
        }
        else
            i--;
    }
    return ret;
}
if ((hours<24)&&(minutes<=60)) 
    {
        console.log(aToR(hours),':',aToR(minutes));
    }
    else
        console.log('Время указано не верно');
