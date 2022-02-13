import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { parseCookies } from "nookies";
import { request } from "https";
export const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const router = useRouter();

    const { access_token } =
      process.env.NODE_ENV === "development"
        ? {
            access_token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YXJlaG91c2UiOnsibmFtZSI6Ikjhu5lpIHPhu58gSE4iLCJwcm92aW5jZSI6IjVmYzcxMWZhMmE2MTUzMzIyMGVkODhlMyIsImlkIjoiNWYwNTc3MzgzNGExNjgwOWNmOTU1OTU3In0sIndhcmVob3VzZXMiOltdLCJyb2xlIjoiQWRtaW4iLCJmdWxsTmFtZSI6IlRy4buLbmggQ8O0bmcgSOG6o2kiLCJpZCI6IjVmMzIwMGNmOTMwYjRiMGUyZmU5MGQ4MSIsImlhdCI6MTY0MTQ3NzAzNCwiZXhwIjoxNjQ0MDY5MDM0fQ.UfZLuPGWI_C9neqCtZeebIeFxmCsonNl8elGoVyHPa4",
          }
        : parseCookies(null);

    useEffect(() => {
      if (!access_token) window.location.href = "https://localhost:3000";
      //   else {
      //     const userTokenData = jwt.decode(access_token, {
      //       json: true,
      //     });
      //     if (userTokenData) {
      //       const currentTime = new Date().getTime() / 1000;
      //       if (currentTime > userTokenData?.exp)
      //         window.location.href = "https://sso.tima.vn";

      //       const notAllowRoles = [EnumUserModelRole.Guest];

      //       if (notAllowRoles.includes(userTokenData?.role)) {
      //         alert(
      //           "Tài khoản chưa được cấp quyền! Vui lòng liên hệ Hotline: 0969 542 333 được được cấp quyền!"
      //         );
      //         window.location.href = "https://sso.tima.vn";
      //       } else {
      //         setUser(userTokenData as UserModel);

      //         if (
      //           userTokenData?.role === EnumUserModelRole.User &&
      //           router.pathname !== "/user/checkin" &&
      //           router.pathname !== "/user/[id]"
      //         ) {
      //           router.push("/user/checkin");
      //         }

      //         const axiosConfig: AxiosRequestConfig = {
      //           baseURL:
      //             process.env.NEXT_PUBLIC_API_URL ||
      //             "http://128.199.75.164:4000/",
      //           timeout: 60000, // 1 phút
      //         };

      //         if (access_token) {
      //           axiosConfig.headers = {
      //             Authorization: `Bearer ${access_token}`,
      //             "Access-Control-Allow-Origin": "*",
      //           };
      //         }
      //         axios.interceptors.response.use(
      //           (response) => response,
      //           (error) => {
      //             // alertError(error)
      //             console.log("Error", error);

      //             return Promise.reject(error);
      //           }
      //         );

      //         serviceOptions.axios = axios.create(axiosConfig);
      //       }
      //     }
      //   }
    }, [router.pathname]);

    // if (!user?.id) return <Loading absoluted />;

    return <WrappedComponent {...props} />;
  };
};
