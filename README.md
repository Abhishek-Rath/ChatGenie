# ChatGenie - React application made using Open AI API

## Features:
- **TL;DR**: Summarize text by adding tl;dr to the end of passage

- **Grammar**: correction: Corrects grammar according to standard english

- **Time complexity**: Find the time complexity of the given code

- **SQL Translate**: Translate natural language to SQL query

## Examples

### TL;DR
![image](https://user-images.githubusercontent.com/60350731/232070796-87f6cd07-e96e-4cd4-84ab-b0c3fc47adb4.png)


### Grammar Correction
![image](https://user-images.githubusercontent.com/60350731/232071042-5152cce9-865b-45f4-baf8-5c67f9507be8.png)


### Time complexity
![image](https://user-images.githubusercontent.com/60350731/232071691-6d33244f-b5ff-4ffd-9d72-f8f99fc886a2.png)


### SQL Translate 
![image](https://user-images.githubusercontent.com/60350731/232072627-11e6336c-6f52-4a46-92b5-c37e7ebaa1e4.png)


### Steps to install the application
- Clone the repository from Github using the following command:
    ``` 
    git clone https://github.com/Abhishek-Rath/ChatGenie.git
    ```

- Navigate to the project directory:
    ```
    cd ChatGenie
    ```

- Install the dependecies:
    ```
    npm install
    ```

- Configure the environment variables: 

    Make ```.env``` file inside root directory of this project and paste your ```API KEY```
    Get your api key from here: https://platform.openai.com/account/api-keys
    ```
    REACT_APP_OPEN_AI_API_KEY = YOUR_API_KEY_GOES_HERE
    ```

- Start the application:
    ```
    npm start
    ```