import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z
    .string()
    .min(3, { message: "Доод тал нь 3 тэмдэгт." })
    .max(30, { message: "Хамгийн ихдээ 30 тэмдэгт." }),
  username: z
    .string()
    .min(3, { message: "Доод тал нь 3 тэмдэгт." })
    .max(30, { message: "Хамгийн ихдээ 30 тэмдэгт." }),
  bio: z
    .string()
    .min(3, { message: "Доод тал нь 3 тэмдэгт." })
    .max(1000, { message: "Maximum 1000 caracters." }),
});
