"use client";

import {
    Grid,
    Stack,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Container,
} from "@mui/material";

import { useEffect, useState } from "react";

export default function Trend() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const getData = async () => {

            const res = await fetch(
                "https://dev.to/api/articles?top=2&per_page=4"
            );
            const data = await res.json();
            setPosts(data);
            
        };
        getData();
    }, []);
    return (
        <Stack>
            <Container className="md:px-10 mt-5">
                    <Typography fontSize={21} fontWeight={700} padding={2}>Trending</Typography>
                        <Grid container spacing={2}>
                            <div className="md:grid md:grid-cols-4 md:flex justify-between gap-10 px-2">
                                {posts.slice(0, 4).map((post) => (
                                    <Grid item key={post.id}>
                                        <SetPostCard {...post} />
                                    </Grid>
                                ))}
                            </div>
                        </Grid>
            </Container >
        </Stack>
    );
}

const SetPostCard = ({ cover_image, description }) => {
    return (
        <Card className="w-[270px] h-[340px] flex mt-10 ml-6 rounded-xl">
            <div className="flex flex-col relative">
                <div className="flex flex-col relative">
                    <CardMedia image={cover_image} className="rounded-xl h-96 w-72 object-cover"/>
                </div>
                <CardContent className="flex flex-col gap-2 absolute bottom-0 left-0">
                    <CardActions  className="rounded-xl p-0">
                        <Button className="text-white bg-blue-600 font-sans">Technology</Button>
                    </CardActions>
                    <Typography fontWeight={700} className="text-xl font-bold text-white line-clamp-3">
                        {description}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
};