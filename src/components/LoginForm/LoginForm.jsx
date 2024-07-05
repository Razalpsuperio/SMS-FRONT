import React from 'react'
import { Button, Card, CardBody, CardHeader, Input,Link } from "@nextui-org/react";
const LoginForm = () => {
  return (
    <div>
       <div className="flex flex-col w-full items-center ">
            <Card className="max-w-full w-[340px] h-[380px]">
                <CardHeader className="flex justify-center items-center gap-4">
                    <div className="flex flex-col ">
                    <p className="text-lg font-semibold">Login to ACETEK</p>
                    </div>
                </CardHeader>
                <CardBody className="overflow-hidden">
                    <form className="flex flex-col gap-4">
                        <Input
                            type="email"
                            label="Email"
                            placeholder="Enter your Email"
                            variant="bordered"
                            className="max-w-xs"
                        />
                        <Input
                            type="password"
                            placeholder="Enter your Password"
                            label="Password"
                            variant="bordered"
                            className="max-w-xs"
                        />
                        <div className="flex gap-2 justify-end">
                            <Button fullWidth color="primary" type="submit" >
                                Login
                            </Button>
                        </div>
                        <div className="text-center text-small">
                            
                            <Link to="/forgotPassword" className="text-purple-400">Forgot password? </Link>
                        </div>
                    </form>
                </CardBody>
            </Card>
        </div> 
    </div>
  )
}

export default LoginForm
