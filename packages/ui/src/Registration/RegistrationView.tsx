import * as React from "react";

export type RegistrationValues = {
  name: string;
  email: string;
  password: string;
};

export type RegistrationProps = {
  title?: string;
  onSubmit: (values: RegistrationValues) => void | Promise<void>;
  validateEmail?: (email: string) => string | null; // return error message or null
  renderFooter?: React.ReactNode;
  className?: string;         // let host app style wrapper
};

export function Registration({
  title = "Create your account",
  onSubmit,
  validateEmail,
  renderFooter,
  className
}: RegistrationProps) {
  const [values, setValues] = React.useState<RegistrationValues>({
    name: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [busy, setBusy] = React.useState(false);

  function set<K extends keyof RegistrationValues>(k: K, v: RegistrationValues[K]) {
    setValues(prev => ({ ...prev, [k]: v }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!values.name) nextErrors.name = "Name is required";
    if (!values.email) nextErrors.email = "Email is required";
    else if (validateEmail) {
      const msg = validateEmail(values.email);
      if (msg) nextErrors.email = msg;
    }
    if (!values.password) nextErrors.password = "Password is required";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    try {
      setBusy(true);
      await onSubmit(values);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      <h1 style={{ margin: "0 0 12px", fontSize: 20 }}>{title}</h1>

      <div style={{ marginBottom: 10 }}>
        <label style={{ display: "block", fontSize: 12, marginBottom: 6 }}>Name</label>
        <input
          value={values.name}
          onChange={e => set("name", e.target.value)}
          placeholder="Your name"
          style={{ width: "100%", padding: 8, borderRadius: 8, border: "1px solid #ddd" }}
        />
        {errors.name && <div style={{ color: "#d00", fontSize: 12 }}>{errors.name}</div>}
      </div>

      <div style={{ marginBottom: 10 }}>
        <label style={{ display: "block", fontSize: 12, marginBottom: 6 }}>Email</label>
        <input
          type="email"
          value={values.email}
          onChange={e => set("email", e.target.value)}
          placeholder="you@example.com"
          style={{ width: "100%", padding: 8, borderRadius: 8, border: "1px solid #ddd" }}
        />
        {errors.email && <div style={{ color: "#d00", fontSize: 12 }}>{errors.email}</div>}
      </div>

      <div style={{ marginBottom: 10 }}>
        <label style={{ display: "block", fontSize: 12, marginBottom: 6 }}>Password</label>
        <input
          type="password"
          value={values.password}
          onChange={e => set("password", e.target.value)}
          placeholder="••••••••"
          style={{ width: "100%", padding: 8, borderRadius: 8, border: "1px solid #ddd" }}
        />
        {errors.password && <div style={{ color: "#d00", fontSize: 12 }}>{errors.password}</div>}
      </div>

      <button
        type="submit"
        disabled={busy}
        style={{
          display: "inline-block",
          padding: "8px 12px",
          borderRadius: 8,
          border: "1px solid transparent",
          background: "#3b82f6",
          color: "#fff",
          cursor: busy ? "not-allowed" : "pointer"
        }}
      >
        {busy ? "Submitting…" : "Create account"}
      </button>

      {renderFooter && <div style={{ marginTop: 12 }}>{renderFooter}</div>}
    </form>
  );
}
