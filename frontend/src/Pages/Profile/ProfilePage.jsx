import React, { useEffect,useState } from 'react'
import Service from '../../utils/http';
import { Avatar, Container, Stack } from '@mantine/core';

const ProfilePage = () => {
    const service = new Service();
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const fetchUser =  async() => {
        try {
            const res = await service.get("user/me");
            console.log(res);
            setUser(res);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchUser();
    }, []);
    if(loading) {
        return <div>Loading...</div>
    }
    if(!user) {
        return <div>No user data</div>
    }



  return (

    <div>
    <Container>
         <Stack
      h={300}
      bg="var(--mantine-color-body)"
      align="center"
      justify="center"
      gap="lg"
    >
        <Avatar src={user.avatar} size={150} radius={150} alt="Profile avatar"   />
        <text>{user.name}</text>
        <text>{user.email}</text>
    </Stack>

    </Container>
    </div>
  );
};


export default ProfilePage
