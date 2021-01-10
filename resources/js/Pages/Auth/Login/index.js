import React, { useState } from "react";
import {
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    Stack,
    Text,
    Checkbox,
    Grid,
    Center
} from "@chakra-ui/react";
import SiteLayout from "~/Layouts/General";
import AbForm from "~/components/AbForm";
import { signin } from "~/Helpers/signin";

const Login = () => {
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const [show, setShow] = useState(false);
    const togglePassword = () => setShow(!show);

    const signin = data => {
        console.log(data);
        //signin(data,setLoading).then((m)=>console.log(m)).catch((errs)=>setErrors(errs))
        return;
    };

    return (
        <div>
            <Grid templateColumns="repeat(1, 1fr)">
                <Center>
                    <Box
                        w={["100%", "40%"]}
                        p="5"
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        m={5}
                    >
                        <AbForm
                            initialValues={{ email: "", password: "" }}
                            onSubmit={signin}
                        >
                            {({ email, password }) => (
                                <Stack spacing={3}>
                                    <Text fontSize="3xl">Login</Text>
                                    <FormControl
                                        id="email"
                                        isRequired
                                        isInvalid={errors.login?.email}
                                    >
                                        <FormLabel>Email address</FormLabel>
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder="Enter Email"
                                            onChange={email.onChange}
                                            value={email.value}
                                        />
                                        <FormErrorMessage>
                                            {errors.login?.email}
                                        </FormErrorMessage>
                                    </FormControl>
                                    <FormControl id="password" isRequired>
                                        <FormLabel>Password</FormLabel>
                                        <InputGroup size="md">
                                            <Input
                                                name="password"
                                                pr="4.5rem"
                                                type={
                                                    show ? "text" : "password"
                                                }
                                                placeholder="Enter password"
                                                onChange={password.onChange}
                                                value={password.value}
                                            />
                                            <InputRightElement width="4.5rem">
                                                <Button
                                                    h="1.75rem"
                                                    size="sm"
                                                    onClick={togglePassword}
                                                >
                                                    {show ? "Hide" : "Show"}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                    </FormControl>
                                    <FormControl id="remember">
                                        <Checkbox defaultIsChecked>
                                            Remember me.
                                        </Checkbox>
                                    </FormControl>
                                    <Button
                                        mt={4}
                                        colorScheme="teal"
                                        isLoading={loading}
                                        type="submit"
                                    >
                                        Submit
                                    </Button>
                                </Stack>
                            )}
                        </AbForm>
                    </Box>
                </Center>
            </Grid>
        </div>
    );
};

Login.layout = page => <SiteLayout guest children={page} />;

export default Login;
