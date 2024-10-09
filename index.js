// Task:
// You will be working with a sample API to practice making requests using Axios. Your task is to:

// GET all the data from the API and display each item’s title and id in the console using a loop.
// POST a new item to the API. After successfully creating it, log the new item’s id and title.
// PUT (update) an existing item. Log the updated item’s details.
// DELETE an item, then log a confirmation message.
// Check status codes for each operation using an if() statement and log appropriate success or failure messages based on the response.

// Base URL: https://jsonplaceholder.typicode.com
// Attention "Not to be static numbers use function ${id}"

// Endpoints:
// GET all items: https://jsonplaceholder.typicode.com/posts
// GET specific item by id: https://jsonplaceholder.typicode.com/posts/{id}
// POST new item: https://jsonplaceholder.typicode.com/posts
// PUT update item: https://jsonplaceholder.typicode.com/posts/{id}
// DELETE item: https://jsonplaceholder.typicode.com/posts/{id}




async function getData(id = null) {
  try {
    let response;
    
    if (id) {
      // Fetch specific post by id
      response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      console.log("Specific Post:");
      console.log("ID:", response.data.id);
      console.log("Title:", response.data.title);
    } else {
      // Fetch all posts if no id is provided
      response = await axios.get("https://jsonplaceholder.typicode.com/posts/");
      console.log("All Posts:");
      for (let i = 0; i < response.data.length; i++) {
        console.log("ID:", response.data[i].id);
        console.log("Title:", response.data[i].title);
      }
    }

    // Check the status code
    if (response.status === 200) {
      console.log("it's all good");
    } else {
      console.log("failed");
    }

  } catch (error) {
    console.log("error ", error);
  }
}

// To get all posts, call getData() without any arguments
// getData();

// To get a specific post, call getData with an id, e.g., getData(1)
getData();
getData(24);



async function postData(id) {
try {
  const postData = {
    title: 'brand new',
    userId: id
  }
  const response = await axios.post("https://jsonplaceholder.typicode.com/posts/",postData)
  console.log(response.data);
  if (response.status===201) {
    console.log("it's all good")
  } else {
    console.log("failed")
  }
  
} catch (error) {
    console.log("error ",error)
}    
  
}

postData(6)

async function updateData(id) {
  try {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{
       title:"updated title",
      userId: 1
      })
    console.log(response.data);

    if (response.status===200) {
        console.log("it's all good, updated successfully")
    } else {
      console.log("failed")
      }
  } catch (error) {
      console.log("error ",error)
  }
}

updateData(1);
async function deleteData(id) {
  try {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    
    if (response.status === 200 || response.status === 204) {
      console.log("it's all good, deleted successfully")
  } else {
    console.log("failed")
    }
  } catch (error) {
    console.log("error ",error)
    
  }
  
}

 deleteData(1);

 
