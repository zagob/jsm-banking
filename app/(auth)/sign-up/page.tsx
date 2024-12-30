import AuthForm from "@/components/auth-form";

function SignUp() {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
}

export default SignUp;
