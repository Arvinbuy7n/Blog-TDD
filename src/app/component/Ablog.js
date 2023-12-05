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
        // fetch("https://656e8a31cb41cca10e9d7539.mockapi.io/posts")
        // .then((res) => res.json())
        // .then((data) => {
        // setPosts(data);
        // setIsLoading(false);
        // });
    }, []);
    return (
        <Stack bgcolor="white" minHeight="100vh">
            <Container>
                <Stack gap={4} px={10} py={10}>
                    <Typography variant="p" fontWeight={700} fontSize={18}>All Blog Posts</Typography>
                    {isLoading && <Typography>Loading...</Typography>}
                    {!isLoading && (

                        <Grid container spacing={2}>

                            {posts.map((post) => (
                                <Grid item key={post.id} xs={12} sm={6} md={4} lg={3}>

                                    <PostCard {...post} />
                                </Grid>
                            ))}
                        </Grid>

                    )}

                </Stack>
            </Container >
        </Stack >
    );
}
const PostCard = ({ image, title, description }) => {
    return (
        <Card>
            <CardMedia sx={{ height: 140 }} image={image} title="green" />
            <CardContent>
                <CardActions>
                    <Button size="small">Technology</Button>
                </CardActions>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                    {title}hello
                </Typography>
            </CardContent>
        </Card>
    );
};