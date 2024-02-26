import PropTypes from 'prop-types';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

export const OverviewTotalCustomers = (props) => {
  const { difference, positive = false, sx, value } = props;
  const [smsCount, setSmsCount] = useState(0);
  const [emailCount, setEmailCount] = useState(0);
  const [callCount, setCallCount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://script.googleusercontent.com/a/macros/skcet.ac.in/echo?user_content_key=3YDRduvRoakAxHxJcXSsBONnAiazRs455i_Sb3L3IQw_r8Cjgw1U6D6zvoizU_CCsKNITkbQ30ZZB8_l7FGSy2k-XOMvRVjKOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBgzsmLdOzbHC_8qITVF7fXh8JJZFsljkgcQM4UwS1rQoWPgAlqiImmX9mAQAnR18Agg4_lKswmxUXjaMbz_6Sr52kTLwOFPPziLoVe-K7gHuF6hOpKyfPsT7xlDcEp37g&lib=M3AmioqxckIU5ScEcYdxzk21LwkdVeYUP");
        const movies = await response.json();

        let sms = 0;
        let calls = 0;
        let email =0;

        for (var i = 0; i < movies.length; i++) {
          if (movies[i].Type === 'SMS') {
            sms++;
          } else if (movies[i].Type === 'Call') {
            calls++;
          }
          else if (movies[i].Type === 'Email') {
            email++;
          }
        }

        setSmsCount(sms);
        setCallCount(calls);
        setEmailCount(email);
      } catch (error) {
        console.error("Error fetching or processing data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="overline"
            >
              Email Complaints
            </Typography>
            <Typography variant="h4">
              {emailCount}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <UsersIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
        {difference && (
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Stack
              alignItems="center"
              direction="row"
              spacing={0.5}
            >
              <SvgIcon
                color={positive ? 'success' : 'error'}
                fontSize="small"
              >
                {positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </SvgIcon>
              <Typography
                color={positive ? 'success.main' : 'error.main'}
                variant="body2"
              >
                {difference}%
              </Typography>
            </Stack>
            <Typography
              color="text.secondary"
              variant="caption"
            >
              Since last month
            </Typography>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

OverviewTotalCustomers.propTypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  value: PropTypes.string.isRequired,
  sx: PropTypes.object
};

