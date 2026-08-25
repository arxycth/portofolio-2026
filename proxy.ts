import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i18n.config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Cek apakah URL sudah memiliki locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) ||
      pathname === `/${locale}`
  );

  // Sudah memiliki locale, lanjutkan request
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Belum memiliki locale, arahkan ke default locale
  request.nextUrl.pathname = `/${i18n.defaultLocale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
