import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const LoadingSpinner = ({ size = 'medium', color = 'blue', fullScreen = false, }) => {
    const sizeClasses = {
        small: 'h-4 w-4',
        medium: 'h-8 w-8',
        large: 'h-12 w-12',
    };
    const colorClasses = {
        blue: 'text-blue-600',
        white: 'text-white',
        gray: 'text-gray-600',
    };
    const spinner = (_jsx("div", { className: "inline-flex items-center justify-center", children: _jsxs("svg", { className: `animate-spin ${sizeClasses[size]} ${colorClasses[color]}`, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }) }));
    if (fullScreen) {
        return (_jsx("div", { className: "fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50", children: spinner }));
    }
    return spinner;
};
export default LoadingSpinner;