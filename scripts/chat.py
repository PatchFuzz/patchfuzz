import openai
name = input("Your name: ")
if name == "":
    name = "User"
sk = input("Your openai key: (Press ENTER to read from file)")
sysprompt = input("System prompt: (Press ENTER to use default)")
if sk == "":
    # read sk from file
    with open("/data/patchFuzz/scripts/sk.txt", "r") as f:
        sk = f.read()
print("--------------------------------")
print("Input your message, type 'exit' to exit, type 'clear' to clear the conversation")
print("Always remember to type 'clear' to save money on API calls")
print("If you want to send a message, press ENTER twice")
print("--------------------------------")
openai.api_key = sk
nmessages = []
if sysprompt != "":
    nmessages.append(
        {"role": "system", "content": sysprompt})
while (1):
    # a multi-line input
    in_message = input(name + ": "+"\n")
    while (1):
        a_message = input()
        if a_message == "":
            break
        # 在两次输入中间加入一个换行符
        in_message = in_message + "\n" + a_message
    if in_message == "exit":
        break
    if in_message == "clear":
        nmessages = []
        nmessages.append({"role": "system", "content": sysprompt})
        print("--------------------------------")
        print("new conversation")
        print("--------------------------------")
        continue
    if (in_message[0:7] == "system:"):
        nmessages.append({"role": "system", "content": in_message[7:]})
    else:
        nmessages.append({"role": "user", "content": in_message})
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=nmessages
    )
    # get response[‘choices’][0][‘message’][‘content’]
    resmessage = response['choices'][0]['message']['content']
    nmessages.append({"role": "assistant", "content": resmessage})
    # delete the enter key before printing
    while ((resmessage[0] == "\n") or (resmessage[0] == " ")):
        resmessage = resmessage[1:]
    while ((resmessage[-1] == "\n") or (resmessage[-1] == " ")):
        resmessage = resmessage[:-1]
    print("ChatGPT:")
    print(resmessage, "\n")
