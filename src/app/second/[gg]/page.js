"use client"


import {
    Stack,
    Typography,
    Container,
} from "@mui/material";

import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function Second() {
    const { gg } = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {

        const getData = async () => {
            const res = await fetch(
                `https://dev.to/api/articles/${gg}`
            )
            const data = await res.json();
            setPost(data);
        }
        getData();
    }, [gg])

    return (
        <Stack bgcolor="white">
            <Container>
                <>
                    <Stack gap={4} py={4} className="md:px-40">
                        <Typography textAlign={"center"} variant="h4">
                            {post.title}
                        </Typography>
                    </Stack>

                    <Stack
                        gap={4}
                        alignItems={"center"}
                        fontSize={18}
                        pb={10}
                        className="text-slate-500 md:px-20"
                        dangerouslySetInnerHTML={{
                            __html: post.body_html,
                        }}
                    ></Stack>
                </>
            </Container >
        </Stack >
    )
}