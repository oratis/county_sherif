import Link from "next/link";
import {
    VercelIcon,
    GithubIcon,
} from "@/components/Icons";

export default function Footer() {
    return (
        <div className="text-center text-xs text-gray-400">
            {" "}| {" "}
            <Link
                target="_blank"
                href="/privacy"
                aria-label="Privacy"
                className="text-slate-600">
                Privacy
            </Link>
            {" "}| {" "}
            <Link
                target="_blank"
                href="/terms"
                aria-label="Terms of Service"
                className="text-slate-600">
                terms
            </Link>
            <p className="mt-4 text-sm text-slate-500 sm:mt-2">
                Copyright © babel.plus rights reserved.
            </p>
        </div>
    );
}
