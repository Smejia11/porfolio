const htmlEscapeMap: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#47;",
  "`": "&#96;",
  "=": "&#61;",
};

export const escapeHtml = (input: unknown): string => {
  if (input === null || input === undefined) return "";
  const text = String(input);

  return text.replace(/[&<>"'`=/]/g, (char) => htmlEscapeMap[char] || char);
};

export const generateEmailHtml = (
  name: string,
  email: string,
  description: string
): string => {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nuevo Contacto</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
            }
            .header {
                background-color: #0070f3;
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
            }
            .content {
                background-color: #f9f9f9;
                padding: 20px;
                border-radius: 0 0 8px 8px;
                border: 1px solid #ddd;
                border-top: none;
            }
            .field {
                margin-bottom: 15px;
            }
            .field strong {
                color: #0070f3;
                display: block;
                margin-bottom: 5px;
            }
            .field-value {
                background-color: white;
                padding: 10px;
                border-radius: 4px;
                border: 1px solid #eee;
            }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>📧 Nuevo Contacto</h1>
        </div>
        <div class="content">
            <div class="field">
                <strong>👤 Nombre:</strong>
                <div class="field-value">${escapeHtml(name)}</div>
            </div>
            <div class="field">
                <strong>📧 Email:</strong>
                <div class="field-value">${escapeHtml(email)}</div>
            </div>
            <div class="field">
                <strong>💬 Mensaje:</strong>
                <div class="field-value">${escapeHtml(description)}</div>
            </div>
        </div>
    </body>
    </html>
  `;
};
