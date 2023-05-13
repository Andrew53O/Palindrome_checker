
// user input for the text
function get_user_input()
{
    // get the input
    const input_Field = document.getElementById("input-field");
    
    // check the value
    
    // check for the null
    if (!input_Field.value)
    {
      alert("Text is empty, Please input some text");
      return
    }
    const result = palindrome(String(input_Field.value));

    if(result == false)
    {
         input_Field.style.backgroundColor = "red";
    }
    else
        input_Field.style.backgroundColor = "green";

    
    setTimeout(() => try_again(), 500);
}

// check for palindrome
function palindrome(str) {
  
  let editedStr = str.replace(/\W+|_/g, "").toLowerCase();
  let reversedStr = editedStr.split("").reverse().join("");
  console.log(reversedStr);

  if (editedStr != reversedStr) 
  {
    return false;
  }
  return true;
}

// 
function try_again()
{
    const ontinue = confirm("Do you want to try again ?");

    if (ontinue != false)
    {
      location.reload();
    }

}


// change input mode

const changeInput = document.getElementsByClassName("change_input");

console.log(changeInput);


