let selection={

title: `Money`,
price: 300,
image_url: `https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60`,
description: `Look at all my monies!`

};

let selection_json = JSON.stringify(selection);
Cookies.set(`user_selection`, `selection_json`);