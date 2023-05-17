
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

// Execute after DOM fully loads
window.addEventListener("DOMContentLoaded", (event) =>
{
  // need index, since it returns an array
  const changeInput = document.getElementsByClassName("change_input")[0];

  console.log(changeInput);

  // when clicked
  changeInput.addEventListener("click", switchInput);

  // change from submit -> enter
  function switchInput()
  {

    const makeNone = document.getElementById("input_v1");

    // get the default input
    const canEnter = document.getElementById("input-field");

    console.log(makeNone);

    if( makeNone.style.display != "none")
    {
      console.log("kenapa masuk sini ya?")
      makeNone.style.display = "none";

      // if the user enter using input
      canEnter.addEventListener("keydown", (the_key) =>
      {
        
        // keyCode properties deprecated, but it is still works, it works
        if(the_key.key == "Enter")
        {
          console.log("apa disin?")
          get_user_input();
        }
      }) 
    }
    else
    {
      // changed but in submit, you can enter to submit
      console.log("masuk sini");
      makeNone.style.display = "block";
      console.log(makeNone.style.display)
    }
    

    
  }


  // change from enter -> submit
  // coming soon
})


