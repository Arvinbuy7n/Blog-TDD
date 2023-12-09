"use client"

import { Stack, Typography, Container} from "@mui/material";
import { red } from "@mui/material/colors";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const { id } = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
    
        const getData = async () => {
            const res = await fetch(
                `https://dev.to/api/articles/${id}`
                );
            const data = await res.json();
            setPost(data);
        };
        getData();
    },[id]);

    return (
        <Stack bgcolor="white">
           <Container>
            <> 
              <Stack gap={4} py={4}  px={20}> 
                  <Typography textAlign={"center"} variant="h4">
                    {post.title}
                  </Typography>              
              </Stack>

              <Stack
                  gap={4}
                  alignItems={"center"} 
                  fontSize={18}
                  pb={10}
                  px={20}
                  className="text-slate-500"
                  dangerouslySetInnerHTML={{
                  __html: post.body_html,
                  }}
              ></Stack>
           </>
    </Container >
</Stack >
    ) 
}