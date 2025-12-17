print("./resources/v8-mjsunit.js", "caller relative");


var string =
"Friends, Romans, countrymen, lend me your ears!  \
 I come to bury Caesar, not to praise him.        \
 The evil that men do lives after them,           \
 The good is oft interred with their bones;       \
 So let it be with Caesar. The noble Brutus       \
 Hath told you Caesar was ambitious;              \
 If it were so, it was a grievous fault,          \
 And grievously hath Caesar answer'd it.          \
 Here, under leave of Brutus and the rest-        \
 For Brutus is an honorable man;                  \
 So are they all, all honorable men-              \
 Come I to speak in Caesar's funeral.             \
 He was my friend, faithful and just to me;       \
 But Brutus says he was ambitious,                \
 And Brutus is an honorable man.                  \
 He hath brought many captives home to Rome,      \
 Whose ransoms did the general coffers fill.      \
 Did this in Caesar seem ambitious?               \
 When that the poor have cried, Caesar hath wept; \
 Ambition should be made of sterner stuff:        \
 Yet Brutus says he was ambitious,                \
 And Brutus is an honorable man.                  \
 You all did see that on the Lupercal             \
 I thrice presented him a kingly crown,           \
 Which he did thrice refuse. Was this ambition?   \
 Yet Brutus says he was ambitious,                \
 And sure he is an honorable man.                 \
 I speak not to disprove what Brutus spoke,       \
 But here I am to speak what I do know.           \
 You all did love him once, not without cause;    \
 What cause withholds you then to mourn for him?  \
 O judgement, thou art fled to brutish beasts,    \
 And men have lost their reason. Bear with me;    \
 My heart is in the coffin there with Caesar,     \
 And I must pause till it come back to me.";

var replaced = string.replace(/\b\w+\b/g, function() { return "foo"; });
for (var i = 0; i < 3; i++) {
  print(replaced,
               string.replace(/\b\w+\b/g, function() { return "foo"; }));
}


var words = string.split(" ");
print("Friends,", words[0]);
words[0] = "Enemies,";
words = string.split(" ");
print("Friends,", words[0]);
