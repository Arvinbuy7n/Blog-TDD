"use client";

import {
    Stack,
    Typography,
    Box,
    Button,
    Container,
    Card,
    CardMedia,
    CardContent,
    CardActions
} from "@mui/material";

import { useEffect, useState } from "react";

export default function Second() {
    const [posts, setPosts] = useState([]);
    const [carouselIndex, setCarouselIndex] = useState(1);
    const [withTransition, setWithTransition] = useState(true);
    const [isOnTransition, setIsOnTransition] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(
                `https://dev.to/api/articles`
            )
            const data = await res.json();
            setPosts(data);
        };
        getData();

    }, []);

    return (
        <Stack className="hidden md:flex">
            <Container>
                <Stack gap={1} py={4}>

                    <>
                        <Box width="100%" overflow={"hidden"}>
                            <Stack
                                direction="row"
                                width="500%"
                                onTransitionStart={() => {
                                    setIsOnTransition(true);
                                }}
                                onTransitionEnd={() => {
                                    if (carouselIndex === 4) {
                                        setCarouselIndex(1);
                                        setWithTransition(false);
                                    }
                                    if (carouselIndex === 0) {
                                        setCarouselIndex(3);
                                        setWithTransition(false);
                                    }
                                    setIsOnTransition(false);
                                }}
                                sx={{
                                    transform: `translateX(-${20 * carouselIndex}%)`,
                                    transition: withTransition ? "300ms" : "none",
                                }}
                            >
                                <Stack flex={1}>
                                    <Stack width="100%" position="relative" pt="40%">
                                        <Stack
                                            position="absolute"
                                            top={0}
                                            left={0}
                                            width="100%"
                                            height="100%"
                                        >
                                            <PostCard {...posts[2]} />
                                        </Stack>
                                    </Stack>
                                </Stack>
                                {posts.slice(0, 3).map((post) => (
                                    <Stack flex={1} key={post.id}>
                                        <Stack width="100%" position="relative" pt="40%">
                                            <Stack
                                                position="absolute"
                                                top={0}
                                                left={0}
                                                width="100%"
                                                height="100%"
                                            >
                                                <PostCard {...post} />
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                ))}
                                <Stack flex={1}>
                                    <Stack width="100%" position="relative" pt="40%">
                                        <Stack
                                            position="absolute"
                                            top={0}
                                            left={0}
                                            width="100%"
                                            height="100%"
                                        >
                                            <PostCard {...posts[0]} />
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Box>
                        <Stack direction="row" justifyContent="flex-end">
                            <Stack direction="row" gap={1}>
                                <Button
                                    variant="outlined"
                                    className="hover:bg-violet-500 hover:text-white rounded-lg"
                                    onClick={() => {
                                        if (isOnTransition) return;
                                        setCarouselIndex((prev) => prev - 1);
                                        setWithTransition(true);
                                        setIsOnTransition(true);
                                    }}
                                >
                                    Previous
                                </Button>
                                <Button
                                    variant="outlined"
                                    className="hover:bg-violet-500 hover:text-white rounded-lg"
                                    onClick={() => {
                                        if (isOnTransition) return;
                                        setCarouselIndex((prev) => prev + 1);
                                        setWithTransition(true);
                                        setIsOnTransition(true);
                                    }}
                                >
                                    Next
                                </Button>
                            </Stack>
                        </Stack>
                    </>
                </Stack>
            </Container>
        </Stack>
    );

}

const PostCard = ({ cover_image, title, description }) => {
    return (
        <Card className="h-full rounded-xl">
            <Stack height="100%">
                <Stack flex={1}>
                    <CardMedia
                        sx={{ height: "100%", objectFit: "cover" }}
                        image={cover_image}
                        className="rounded-xl"
                    />
                </Stack>
                <CardContent className="flex flex-col rounded-xl w-[560px] gap-4 absolute bottom-0 left-0 bg-white py-7 mb-4 ml-4 pl-7 pr-40">
                    <CardActions className="rounded-xl p-0">
                        <Button className="text-white bg-blue-600 font-sans">Technology</Button>
                    </CardActions>
                    <Typography className="text-2xl font-bold text-black line-clamp-2">
                        {description}
                    </Typography>
                    <Typography className="text-lg text-slate-500 line-clamp-1 pr-32">
                        {title}
                    </Typography>
                </CardContent>
            </Stack>
        </Card>
    )
}



// "use client";

// import {
//     Grid,
//     Stack,
//     Typography,
//     Card,
//     CardMedia,
//     CardContent,
//     CardActions,
//     Button,
//     Container,
// } from "@mui/material";
// import { useEffect, useState } from "react";

// export default function Trend() {
//     const [posts, setPosts] = useState([]);
//     const [number, setNumber] = useState(2)

//     useEffect(() => {
//         const getData = async () => {
//             const res = await fetch(
//                 `https://dev.to/api/articles?top=20&page=${number}&per_page=6`
//             );
//             const data = await res.json();
//             setPosts(data);
//         };
//         getData();
//     }, [number]);
//     const clickHandler = () => {
//         setNumber((prev) => {
//             if (prev > 6) {
//                 return (prev = 0);
//             } else {
//                 return prev + 1;
//             }
//         });
//     };
//     const clickAdd = () => {
//         setNumber((p) => {
//             if (p !== 0) {
//                 return p - 1;
//             }
//         });
//     };

//     return (
//         <Stack>
//             <Container>
//                 <Stack>
//                     <Grid>
//                         {posts.slice(0, 1).map((post) => (
//                             <Grid item key={post.id}>
//                                 <SetPostCard {...post} />
//                             </Grid>
//                         ))}
//                     </Grid>
//                     <div className="hidden md:flex gap-1 justify-end mt-2">
//                         <button className="border-2 border-slate-200 text-slate-500 rounded-xl px-2 py-1 hover:bg-violet-500 hover:text-white" onClick={clickHandler}>Previous</button>
//                         <button className="border-2 border-slate-200 text-slate-500 rounded-xl px-2 py-1 hover:bg-violet-500 hover:text-white" onClick={clickAdd}>Next</button>
//                     </div>
//                 </Stack>
//             </Container >
//         </Stack >
//     );
// }

const SetPostCard = ({ cover_image, title, description }) => {
    return (
        <Card className="hidden w-[1160px] h-[530px] md:flex mt-10 ml-8 rounded-xl">
            <div className="flex flex-col gap-1 relative">
                <CardMedia image={cover_image} className="rounded-xl h-[530px] w-[1160px]" />
                <CardContent className="flex flex-col rounded-xl w-[560px] gap-4 absolute bottom-0 left-0 bg-white py-7 mb-4 ml-4 pl-7 pr-40">
                    <CardActions className="rounded-xl p-0">
                        <Button className="text-white bg-blue-600 font-sans">Technology</Button>
                    </CardActions>
                    <Typography className="text-2xl font-bold text-black line-clamp-2">
                        {description}
                    </Typography>
                    <Typography className="text-lg text-slate-500 line-clamp-1 pr-32">
                        {title}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
};




