import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const useValidator = ({
    ignoreName = false,
    ignoreConfirmPassword = false,
    ignoreAcceptTerms = false,
} = {}) => {
    const validationSchema = Yup.object().shape({
        fullname:
            !ignoreName &&
            Yup.string()
                .required("Fullname is required")
                .min(3, "Fullname must be at least 3 characters")
                .max(40, "Fullname must not exceed 40 characters"),
        email: Yup.string()
            .required("Email is required")
            .email("Email is invalid"),
        password: Yup.string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters")
            .max(40, "Password must not exceed 40 characters"),
        confirmPassword:
            !ignoreConfirmPassword &&
            Yup.string()
                .required("Confirm Password is required")
                .oneOf(
                    [Yup.ref("password"), null],
                    "Confirm Password does not match"
                ),
        acceptTerms:
            !ignoreAcceptTerms &&
            Yup.bool().oneOf([true], "Accept Terms is required"),
    });

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    return { register, control, handleSubmit, errors };
};

export default useValidator;
