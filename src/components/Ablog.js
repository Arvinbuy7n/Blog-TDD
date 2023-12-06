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
import { red } from "@mui/material/colors";
import { Big_Shoulders_Display } from "next/font/google";
import { useEffect, useState } from "react";
export default function Ablog() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            const res = await fetch(
                "https://656e8a31cb41cca10e9d7539.mockapi.io/posts"
            );
            const data = await res.json();
            setPosts(data);
            setIsLoading(false);
        };
        getData();
    }, []);
    return (
        <Stack bgcolor="white" minHeight="100vh" ml={20}>
            <Container>
                <Stack gap={4} py={10}>
                    <Typography variant="p" fontWeight={700} fontSize={18}>All Blog Posts</Typography>
                    <div className="flex justify-between px-14">
                        <div className="flex gap-5">
                            <p className="text-orange-400 font-sans">All</p>
                            <p className="font-sans text-slate-700 text-base">Design</p>
                            <p className="font-sans text-slate-700 text-base">Travel</p>
                            <p className="font-sans text-slate-700 text-base">Fashion</p>
                            <p className="font-sans text-slate-700 text-base">Technology</p>
                            <p className="font-sans text-slate-700 text-base">Branding</p>
                        </div>
                        <p className="font-sans text-slate-700 text-sm">View All</p>
                    </div>
                    {isLoading && <Typography>Loading...</Typography>}
                    {!isLoading && (
                        <Grid container spacing={2}>
                            <div className="grid grid-cols-3 flex w-full justify-between ml-10 gap-3">
                                {posts.slice(0, 9).map((post) => (
                                    <Grid item key={post.id} xs={12} sm={6} md={4} lg={3}>

                                        <PostCard {...post} />
                                    </Grid>
                                ))}
                            </div>
                        </Grid>
                    )}
                    <div className="flex justify-center items-center py-20">
                        <button className="border-2 w-fit py-2 px-4 rounded-xl text-slate-500">Load More</button>
                    </div>

                </Stack>
            </Container >
        </Stack >
    );
}
const PostCard = ({ image, title, description }) => {
    return (
        <Card className="w-80 flex flex-col border-2 rounded-lg mt-10">
            <div className="px-5 pt-5 flex flex-col gap-1 h-fit">
                <CardMedia sx={{ height: 180 }} image={image} title="green" className="rounded-lg" />
                <CardContent className="flex flex-col gap-4" >
                    <CardActions className="border-2 w-fit h-fit rounded-lg bg-slate-100 p-0">
                        <Button className="text-blue-600">Technology</Button>
                    </CardActions>
                    <Typography className="text-xl font-bold">
                        {description}
                    </Typography>
                    <Typography className="text-slate-500 font-sans text-sm">
                        {title}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
};