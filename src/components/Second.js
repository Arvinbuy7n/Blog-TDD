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
    const [number, setNumber] = useState(2)
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(
                `https://dev.to/api/articles?top=1&page=${number}&per_page=6`
            );
            const data = await res.json();
            setPosts(data);
        };
        getData();
    }, [number]);
    const clickHandler = () => {
        setNumber((prev) => {
            if (prev > 6) {
                return (prev = 0);
            } else {
                return prev + 1;
            }
        });
    };
    const clickAdd = () => {
        setNumber((p) => {
            if (p !== 0) {
                return p - 1;
            }
        });
    };

    return (
        <Stack bgcolor="white">
            <Container>
                <Stack>
                    <Grid container spacing={2}>
                        {posts.slice(0, 1).map((post) => (
                            <Grid item key={post.id} xs={12} sm={6} md={4} lg={3}>
                                <SetPostCard {...post} />
                            </Grid>
                        ))}
                    </Grid>
                    <div className="md:flex gap-3 hidden justify-end mt-2">
                        <button className="border-2 border-slate-700 rounded-lg px-2 py-1" onClick={clickHandler}>{`<`}</button>
                        <button className="border-2 border-slate-700 rounded-lg px-2 py-1" onClick={clickAdd}>{`>`}</button>
                    </div>
                </Stack>
            </Container >
        </Stack >
    );
}

const SetPostCard = ({ cover_image, title, description }) => {
    return (
        <Card className="w-[1200px] h-[530px] md:flex mt-10 ml-4 hidden">
            <div className="flex flex-col gap-1 relative">
                <div className="flex flex-col">
                    <CardMedia image={cover_image} className="rounded-lg h-[530px] w-[1200px]" />
                </div>
                <CardContent className="flex flex-col rounded-xl w-[560px] gap-4 absolute bottom-0 left-0 bg-white pt-10 mb-4 ml-4 pl-7 pr-40">
                    <CardActions className="rounded-xl p-0">
                        <Button className="text-white bg-blue-600 font-sans">Technology</Button>
                    </CardActions>
                    <Typography className="text-2xl font-bold text-black line-clamp-2">
                        {description}
                    </Typography>
                    <Typography className="text-lg font-bold text-slate-500 line-clamp-1 pr-20">
                        {title}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
};