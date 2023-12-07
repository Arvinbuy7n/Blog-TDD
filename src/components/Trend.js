
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
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            const res = await fetch(
                "https://dev.to/api/articles?top=4&per_page=4"
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
                <Stack gap={4} py={10}>
                    <Typography className="text-xl font-bold">Trending</Typography>
                    {isLoading && <Typography className="text-xl font-bold">Loading...</Typography>}

                    {!isLoading && (
                        <Grid container spacing={2}>
                            <div className="md:grid md:grid-cols-4 md:flex w-full justify-between gap-10">
                                {posts.slice(0, 4).map((post) => (
                                    <Grid item key={post.id} xs={12} sm={6} md={4} lg={3}>

                                        <SetPostCard {...post} />
                                    </Grid>
                                ))}
                            </div>
                        </Grid>
                    )}
                </Stack>
            </Container >
        </Stack >
    );
}

const SetPostCard = ({ cover_image, description }) => {
    return (
        <Card className="w-[290px] h-[340px] flex mt-10 ml-4">
            <div className="flex flex-col gap-1 relative">
                <div className="flex flex-col relative">
                    <CardMedia image={cover_image} className="rounded-lg h-96 w-72" />
                </div>
                <CardContent className="flex flex-col gap-4 absolute bottom-0 left-0">
                    <CardActions className="rounded-xl p-0">
                        <Button className="text-white bg-blue-600 font-sans">Technology</Button>
                    </CardActions>
                    <Typography className="text-xl font-bold text-white line-clamp-2">
                        {description}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
};