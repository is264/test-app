import { React, useState } from "react";
import { ZodError } from "zod";
import { ErrorMessage } from "../components/ErrorMessage";
import { FormGroup } from "../components/FormGroup";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import { TextArea } from "../components/TextArea";
import { API_BASE_URL } from "../const";
import { contactSchema } from "../schemas/contactSchema";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * 入力フォーム更新時のハンドラー
   */
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  /**
   * 入力フォームクリア時のハンドラー
   */
  const handleClear = () => {
    setForm({
      name: "",
      email: "",
      message: "",
    });
    setErrors({});
  };

  /**
   * 送信ボタンクリック時のハンドラー
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 入力フォームのバリデーション
      contactSchema.parse(form);
      // 入力フォーム送信
      await fetch(`${API_BASE_URL}/contacts`, {
        method: "POST",
        body: JSON.stringify(form),
      });
      // 送信完了メッセージ表示
      alert("送信しました。");
      // 入力フォームクリア
      handleClear();
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors = {};
        error.issues.forEach((err) => {
          if (!fieldErrors[err.path[0]]) {
            // 最初のエラーのみ保持
            fieldErrors[err.path[0]] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        console.error("送信エラー:", error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-[800px] mx-auto my-10">
      <div className="mb-10 text-xl font-bold">問い合わせフォーム</div>
      <div className="">
        <form>
          <FormGroup>
            <Label htmlFor="name" text="名前" />
            <div className="flex-1">
              <Input
                type="text"
                id="name"
                value={form.name}
                onChangeHandler={handleChange}
                disabled={isSubmitting}
              />
              <ErrorMessage message={errors.name} />
            </div>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email" text="メールアドレス" />
            <div className="flex-1">
              <Input
                type="email"
                id="email"
                value={form.email}
                onChangeHandler={handleChange}
                disabled={isSubmitting}
              />
              <ErrorMessage message={errors.email} />
            </div>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message" text="本文" />
            <div className="flex-1">
              <TextArea
                id="message"
                rows={8}
                value={form.message}
                onChangeHandler={handleChange}
                disabled={isSubmitting}
              />
              <ErrorMessage message={errors.message} />
            </div>
          </FormGroup>
          <div className="flex justify-center items-center gap-4">
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-black text-white font-bold px-4 py-2 rounded-md"
            >
              送信
            </button>
            <button
              type="button"
              onClick={handleClear}
              disabled={isSubmitting}
              className="bg-gray-200 text-black font-bold px-4 py-2 rounded-md"
            >
              クリア
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
