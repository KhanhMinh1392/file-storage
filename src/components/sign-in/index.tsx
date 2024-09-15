'use client';
import Icon, { GoogleIcon } from '@/components/icon';
import { setCookie } from '@/lib/cookies';
import { postSignIn } from '@/services/sign-in';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(20),
});

type SignUpSchemaType = z.infer<typeof SignInSchema>;

export default function SignIn() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignInSchema) });

  const { mutate } = useMutation({
    mutationFn: postSignIn,
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        setCookie('accessToken', data.accessToken, 1);
        reset();
        onClose();
      },
    });
  };

  const handleOpenChange = () => {
    onOpenChange();
    setIsVisible(false);
    reset();
  };

  return (
    <>
      <Button variant="bordered" onPress={onOpen}>
        Sign In
      </Button>
      <Modal isOpen={isOpen} onOpenChange={handleOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center text-2xl">Sign in</ModalHeader>
              <ModalBody className="gap-0">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Input
                    isRequired
                    size="md"
                    variant="bordered"
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    isInvalid={!!errors.email}
                    errorMessage={errors.email?.message}
                    className="h-20"
                    {...register('email')}
                  />
                  <Input
                    isRequired
                    label="Password"
                    variant="bordered"
                    placeholder="Enter your password"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                        aria-label="toggle password visibility"
                      >
                        <Icon
                          name={isVisible ? 'eye' : 'eye-off'}
                          className="pointer-events-none text-2xl text-default-400"
                        />
                      </button>
                    }
                    type={isVisible ? 'text' : 'password'}
                    className="h-20"
                    isInvalid={!!errors.password}
                    errorMessage={errors.password?.message}
                    {...register('password')}
                  />
                  <div className="mb-4 flex items-center justify-between">
                    <Checkbox size="md">
                      <span className="text-sm text-gray-500">Remember me</span>
                    </Checkbox>
                    <Link href="#" className="text-sm text-blue-500">
                      Forgot password?
                    </Link>
                  </div>
                  <Button color="primary" type="submit" size="lg" className="w-full">
                    Sign in
                  </Button>
                </form>
              </ModalBody>
              <ModalFooter className="mt-2 border-t">
                <Button size="lg" variant="bordered" className="w-full" onPress={onClose}>
                  <GoogleIcon />
                  Sign in with Google
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
