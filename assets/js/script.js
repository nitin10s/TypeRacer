arr=['ACCOUNT','ACCURATE','ACRES','ACROSS','ACT','ACTION','ACTIVE','ACTIVITY',
  'ACTUAL','ACTUALLY','ADD','ADDITION','ADDITIONAL','ADJECTIVE','ADULT','ADVENTURE',
  'ADVICE','AFFECT','AFRAID','AFTER','AFTERNOON','AGAIN','AGAINST','AGE',
  'AGO','AGREE','AHEAD','AID','AIR','AIRPLANE','ALIKE','ALIVE',
  'ALL','ALLOW','ALMOST','ALONE','ALONG','ALOUD','ALPHABET','ALREADY',
  'ALSO','ALTHOUGH','AM','AMONG','AMOUNT','ANCIENT','ANGLE','ANGRY',
  'ANIMAL','ANNOUNCED','ANOTHER','ANSWER','ANTS','ANY','ANYBODY','ANYONE',
  'ANYTHING','ANYWAY','ANYWHERE','APART','APARTMENT','APPEARANCE','APPLE','APPLIED',
  'APPROPRIATE','ARE','AREA','ARM','ARMY','AROUND','ARRANGE','ARRANGEMENT',
  'ARRIVE','ARROW','ART','ARTICLE','AS','ASIDE','ASK','ASLEEP',
  'AT','ATE','ATMOSPHERE','ATOM','ATOMIC','ATTACHED','ATTACK','ATTEMPT',
  'ATTENTION','AUDIENCE','AUTHOR','AUTOMOBILE','AVAILABLE','AVERAGE','AVOID','AWARE',
  'AWAY','BABY','BACK','BAD','BADLY','BAG','BALANCE','BALL',
  'BALLOON','BAND','BANK','BAR','BARE','BARK','BARN','BASE',
  'BASEBALL','BASIC','BASIS','BASKET','BAT','BATTLE','BE','BEAN',
  'BEAR','BEAT','BEAUTIFUL','BEAUTY','BECAME','BECAUSE','BECOME','BECOMING',
  'BEE','BEEN','BEFORE','BEGAN','BEGINNING','BEGUN','BEHAVIOR','BEHIND',
  'BEING','BELIEVED','BELL','BELONG','BELOW','BELT','BEND','BENEATH',
  'BENT','BESIDE','BEST','BET','BETTER','BETWEEN','BEYOND','BICYCLE',
  'BIGGER','BIGGEST','BILL','BIRDS','BIRTH','BIRTHDAY','BIT','BITE',
  'BLACK','BLANK','BLANKET','BLEW','BLIND','BLOCK','BLOOD','BLOW',
  'BLUE','BOARD','BOAT','BODY','BONE','BOOK','BORDER','BORN',
  'BOTH','BOTTLE','BOTTOM','BOUND','BOW','BOWL','BOX','BOY',
  'BRAIN','BRANCH','BRASS','BRAVE','BREAD','BREAK','BREAKFAST','BREATH',
  'BREATHE'];
cnt=0;
n=3
str=arr[cnt];
word1=[];
var score=0
var qwerty='';




for(var element in str) 
        {
            qw=`<t id=${element}>`+str[element]+'</t>'
            word1.push(qw);
        } 
        document.getElementById('test').innerHTML=word1.join('');
//document.getElementById('t1').onkeyup=function(){abc()};

var count=0; // Count in Array of Letters
merac=0

function changeGreen(count)
{
document.getElementById(count).style.color='#7cc576';
merac++
console.log(merac)
}

function changeRed(count)
{
    document.getElementById(count).style.color='#ff3939';
}
l2=0;

function check(){
    if(merac==word1.length)
    {
        score++;
        document.getElementById('count').innerHTML=score
        cnt++;
        str=arr[cnt];
        count=0;
        merac=0
        l2=0
        word1=[]
    for(var element in str) 
        {
            qw=`<t id=${element}>`+str[element]+'</t>'
            word1.push(qw);
        }   
        document.getElementById('test').innerHTML=word1.join('');
        document.getElementById('t1').value=''
    }
}

function abc(){

    word=document.getElementById('t1').value;
    l2++;
    qwerty=word[word.length-1];
    l1=word.length;
    if(l1==count+1)
    {    
        if(str[count]===qwerty)
        {
                count++;
                changeGreen(count-1);
        }
        else
        {
            count++;
            changeRed(count-1);
        }
    }
    else
    {
        document.getElementById(count-1).style.color='#4e4e4e';
        count--;
    }
    check();
}

//////////////


var clock = 30;
var countdownId = 0;
        function start() {
            setInterval("countdown()", 1000);
        }
        function countdown(){
            if(clock > 0){
                clock = clock - 1;
                document.getElementById('timerr').innerHTML = clock;
            }
            else {
                //Stop clock
                document.getElementById('test').innerHTML="YOUR SCORE";
                document.getElementById('test').style.fontSize="100px";
                document.getElementById('t1').style.display='none';
                clearInterval(countdownId);
            }  
        }
