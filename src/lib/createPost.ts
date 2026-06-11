export type FormValues = {
  title: string;
  body: string;
  userId: number;
};

export async function postData(url: string, { arg }: { arg: FormValues }) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });

  return res.json();
}
