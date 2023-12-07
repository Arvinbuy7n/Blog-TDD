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
export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [isMore, setIsMore] = useState(3);
    const addMore = () => {
        setIsMore(isMore + 3)
    };
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            const res = await fetch(
                "https://dev.to/api/articles?top=18&per_page"
            );
            const data = await res.json();
            setPosts(data);
            setIsLoading(false);
        };
        getData();
    }, []);
    return (
        <Stack bgcolor="white">
            <Container>
                <Stack pt={10}>
                    <Typography className="text-xl font-bold">All Blog Posts</Typography>
                    <div className="flex justify-between mt-8">
                        <div className="flex gap-5">
                            <p className="text-orange-400 font-bold">All</p>
                            <p className="font-bold text-slate-700 text-base">Design</p>
                            <p className="font-bold text-slate-700 text-base">Travel</p>
                            <p className="font-bold text-slate-700 text-base">Fashion</p>
                            <p className="font-bold text-slate-700 text-base">Technology</p>
                            <p className="font-bold text-slate-700 text-base">Branding</p>
                        </div>
                        <p className="font-bold text-slate-700 text-sm">View All</p>
                    </div>
                    {isLoading && <Typography className="text-xl font-bold">Loading...</Typography>}
                    {!isLoading && (
                        <Grid container spacing={2}>
                            <div className="grid grid-cols-3 flex w-full justify-between gap-3">
                                {posts.slice(0, isMore).map((post) => (
                                    <Grid item key={post.id} xs={12} sm={6} md={4} lg={3}>

                                        <PostCard {...post} />
                                    </Grid>
                                ))}
                            </div>
                        </Grid>
                    )}
                    <div className="flex justify-center items-center py-20">
                        <button onClick={() => { addMore() }} className="border-2 w-fit py-2 px-4 rounded-xl text-slate-500 hover:bg-purple-700 hover:text-white">Load More</button>
                    </div>

                </Stack>
            </Container >
        </Stack >
    );
}
const PostCard = ({ cover_image, title, description }) => {
    return (
        <Card className="w-[360px] flex flex-col border-2 rounded-lg mt-10 ml-4">
            <div className="px-3 pt-3 flex flex-col gap-1">
                <CardMedia image={cover_image} className="rounded-lg h-44" />
                <CardContent className="flex flex-col gap-4 p-0 mt-4" >
                    <CardActions className="w-fit rounded-xl bg-slate-100 p-0">
                        <Button className="text-blue-600">Technology</Button>
                    </CardActions>
                    <Typography className="text-xl font-bold line-clamp-3">
                        {description}
                    </Typography>
                    <Typography className="text-slate-500 font-sans text-sm line-clamp-1">
                        {title}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
};