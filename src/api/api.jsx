// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ApiContext = React.createContext();

// export const ApiProvider = ({ children }) => {
//   const [api, setApi] = useState({
//     baseUrl: "",
//     headers: { "Content-Type": "application/json" },
//   });

//   useEffect(() => {
//     const createApiInstance = async () => {
//       try {
//         const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
//         const apiToken = process.env.REACT_APP_API_TOKEN;

//         const headers = {
//           "Content-Type": "application/json",
//         };

//         if (apiToken) {
//           headers["Authorization"] = `Bearer ${apiToken}`;
//           headers["token"] = apiToken; 
//         }

//         setApi((prevApi) => ({ ...prevApi, baseUrl: apiBaseUrl, headers }));
//       } catch (error) {
//         console.error("Error creating API instance:", error);
//       }
//     };

//     createApiInstance();
//   }, []); 

//   const fetchPosts = async (currentPage, perPage) => {
//     try {
//       const response = await axios.get(
//         `${api.baseUrl}/api/posts?page=${currentPage}&perPage=${perPage}&sortBy=title&sortDirection=asc&searchPhrase=test%20ber&categoryId=1`,
//         {
//           headers: api.headers,
//         }
//       );

//       // Extracting relevant text and image data
//       const postsData = response.data.data.map((post) => ({
//         id: post.id,
//         title: post.title,
//         content: post.content,
//         created_at: post.created_at,
//         category: post.category.name,
//         img_url: post.img_url,
//       }));

//       return postsData;
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//       throw error;
//     }
//   };

//   const contextValue = {
//     api,
//     axiosInstance: axios.create({
//       baseURL: api.baseUrl,
//       headers: api.headers,
//     }),
//     fetchPosts,
//   };

//   return (
//     <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>
//   );
// };

// export const useApi = () => {
//   const context = React.useContext(ApiContext);

//   if (!context) {
//     throw new Error("useApi must be used within an ApiProvider");
//   }

//   return {
//     api: context.api,
//     axiosInstance: context.axiosInstance,
//     fetchCategories: context.fetchCategories,
//     fetchPosts: context.fetchPosts,
//   };
// };
