'use client';

import React from 'react';
import { MemberListProps } from './MemberList.types';

export const MemberList: React.FC<MemberListProps> = ({
  members = [],
  isLoading = false,
  error = null,
  onRoleChange,
  onRemoveMember,
}) => {
  if (isLoading) {
    return <div className="p-4 text-center">Loading members...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500 bg-red-50 rounded">Error: {error}</div>;
  }

  if (members.length === 0) {
    return <div className="p-4 text-gray-500">No members found.</div>;
  }

  return (
    <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="p-4 font-semibold text-gray-700">Name</th>
            <th className="p-4 font-semibold text-gray-700">Email</th>
            <th className="p-4 font-semibold text-gray-700">Role</th>
            <th className="p-4 font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id} className="border-b border-gray-100 last:border-none">
              <td className="p-4 text-gray-900">{member.name}</td>
              <td className="p-4 text-gray-600">{member.email}</td>
              <td className="p-4">
                <select
                  value={member.role}
                  onChange={(e) => onRoleChange?.(member.id, e.target.value as any)}
                  className="px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="owner">Owner</option>
                  <option value="admin">Admin</option>
                  <option value="member">Member</option>
                  <option value="viewer">Viewer</option>
                </select>
              </td>
              <td className="p-4">
                <button
                  onClick={() => onRemoveMember?.(member.id)}
                  className="text-red-600 hover:text-red-800 font-medium text-sm"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
