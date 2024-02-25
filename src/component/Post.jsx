import React, { useEffect, useState } from "react";
import PostLoading from "./PostLoading";
import CardPost from "./CardPost";
import { Box, Typography } from "@mui/material";

const Post = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:8000/api");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        <Box
          style={{
            padding: 20,
            marginTop: 50,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <Typography component={"h2"} variant="h5" sx={{ fontWeight: "bold" }}>
            LATEST POST
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 10 , justifyContent: "center" , alignItems: "center"}}>
            {data.map((item) => (
              <CardPost
                title={item.title}
                content={item.content}
                key={item.id}
              />
            ))}
          </Box>
        </Box>
      ) : (
        <div>
          <PostLoading />
        </div>
      )}
    </div>
  );
};

export default Post;
