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
export default function Ablog() {
    const [posts, setPosts] = useState([]);
    const [loadMore, setLoadMore] = useState(9)
    const addLoad = () => {
        setLoadMore(loadMore + 3)
    }
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            const res = await fetch(
                `https://dev.to/api/articles?top=12&per_page`
            );
            const data = await res.json();
            setPosts(data);
            setIsLoading(false);
        };
        getData();
    }, [loadMore]);
    return (
        <Stack bgcolor="white">
            <Container>
                <Stack gap={4} py={10}>
                    <Typography className="text-xl font-bold">All Blog Posts</Typography>
                    {isLoading && <Typography className="text-xl font-bold">Loading...</Typography>}
                    {!isLoading && (
                        <Grid container spacing={2}>
                            <div className="md:grid md:grid-cols-3 md:flex w-full justify-between gap-3">
                                {posts.slice(0, loadMore).map((post) => (
                                    <Grid item key={post.id} xs={12} sm={6} md={4} lg={3}>
                                        <Link href={`/ablog/${post.id}`}>
                                           <PostCard {...post}/>
                                        </Link>
                                    </Grid>
                                ))}
                            </div>
                        </Grid>
                    )}
                    <div className="hidden md:flex justify-center items-center py-16">
                        <button onClick={() => { addLoad() }} className="border-2 w-fit py-2 px-4 rounded-xl text-slate-500 hover:bg-purple-700 hover:text-white">Load More</button>
                    </div>

                </Stack>
            </Container >
        </Stack >
    );
}
const PostCard = ({ cover_image, title, description }) => {
    return (
        <Card className="w-[360px] flex flex-col border-2 rounded-lg mt-10 ml-4">
            <div className="px-5 pt-5 flex flex-col gap-1 h-fit">
                <CardMedia image={cover_image} className="rounded-lg h-44" />
                <CardContent className="flex flex-col gap-4" >
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