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

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [isMore, setIsMore] = useState(6);
    const [category, setCategory] = useState(" ")
    const [isLoading, setIsLoading] = useState(true);

    const addMore = () => {
        setIsMore(isMore + 3)
    };

    const getCategory = (event) => {
        setCategory(event.target.textContent.toLowerCase())
        console.log(event.target.textContent.toLowerCase())
    }

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            const res = await fetch(
                `https://dev.to/api/articles?top=20&tag=${category}`

            );
            const data = await res.json();
            setPosts(data);
            setIsLoading(false);
        };
        getData();
    }, [category]);

    return (
        <Container>
            <Stack className="md:pt-16 md:ml-8">
                <Typography className="text-2xl font-bold mt-10">All Blog Posts</Typography>
                <div className="hidden md:flex justify-between mt-10">
                    <div className="flex gap-5">
                        <p className="font-bold text-slate-700 hover:text-orange-400">All</p>
                        <p onClick={getCategory} className="font-bold text-slate-700 text-base hover:text-orange-400">Design</p>
                        <p onClick={getCategory} className="font-bold text-slate-700 text-base hover:text-orange-400">Travel</p>
                        <p onClick={getCategory} className="font-bold text-slate-700 text-base hover:text-orange-400">Fashion</p>
                        <p onClick={getCategory} className="font-bold text-slate-700 text-base hover:text-orange-400">Technology</p>
                        <p onClick={getCategory} className="font-bold text-slate-700 text-base hover:text-orange-400">Branding</p>
                    </div>
                    <p className="font-bold text-slate-700 text-base">View All</p>
                </div>
                {isLoading && <Typography fontSize={32} fontWeight={700} className="flex justify-center py-32">Loading...</Typography>}
                {!isLoading && (
                    <Grid>
                        <div className="md:grid md:grid-cols-3 gap-3">
                            {posts.slice(0, isMore).map((post) => (
                                <Grid item key={post.id}>
                                    <Link href={`/blog/${post.id}`}>
                                        <PostCard {...post} />
                                    </Link>
                                </Grid>
                            ))}
                        </div>
                    </Grid>
                )}
                <div className="md:flex hidden justify-center py-20">
                    <button onClick={() => { addMore() }} className="border-2 w-fit py-2 px-4 rounded-xl text-slate-500 hover:bg-purple-700 hover:text-white">Load More</button>
                </div>
            </Stack>
        </Container >
    );
}
const PostCard = ({ cover_image, title, description, tag_list }) => {
    return (
        <Card className="w-[360px] flex flex-col rounded-xl mt-10 ml-2">
            <div className="px-3 pt-3 flex flex-col gap-1">
                <CardMedia image={cover_image} className="rounded-lg h-44" />
                <CardContent className="flex flex-col gap-3 p-0 mt-4" >
                    <CardActions className="w-fit rounded-xl bg-slate-100 p-0">
                        <Button className="text-blue-700">Technology</Button>
                    </CardActions>
                    <Typography fontWeight={700} fontSize={18} className="text-xl font-bold line-clamp-3">
                        {description}
                    </Typography>
                    <Typography className="text-slate-500 font-sans text-sm line-clamp-1 pr-48">
                        {title}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
};