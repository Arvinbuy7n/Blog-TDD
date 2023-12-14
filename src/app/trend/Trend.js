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
    Container
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Trend() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getData = async () => {

            const res = await fetch(
                "https://dev.to/api/articles?top=8&per_page=4"
            );
            const data = await res.json();
            setPosts(data);

        };
        getData();
    }, []);

    return (
        <Container className="md:px-10 md:mt-16 flex items-center flex-col md:items-start">
            <Typography fontSize={25} fontWeight={700} padding={2} justifyContent={"center"} alignItems={"center"}>Trending</Typography>
            <Grid container spacing={2} className="flex justify-center items-center">
                <div className="md:grid md:grid-cols-4 md:flex justify-between gap-10 px-2">
                    {posts.slice(0, 4).map((post) => (
                        <Grid item key={post.id}>
                            <Link href={`/trend/${post.id}`}>
                                <SetPostCard {...post} />
                            </Link>
                        </Grid>
                    ))}
                </div>
            </Grid>
        </Container >
    );
};

const SetPostCard = ({ cover_image, description }) => {
    return (
        <Card className="w-[270px] h-[340px] mt-10 ml-6 rounded-xl">
            <div className="flex flex-col relative">
                <CardMedia image={cover_image} className="rounded-xl h-96 w-72 object-cover" />
                <CardContent className="flex flex-col gap-2 absolute bottom-0 left-0 mb-10">
                    <CardActions className="rounded-xl p-0">
                        <Button className="text-white bg-blue-600">Technology</Button>
                    </CardActions>
                    <Typography className="text-xl font-bold text-white line-clamp-3">
                        {description}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
};